"use client";
import React, { useState } from "react";
import {
    SidebarProvider,
    Sidebar,
    SidebarTrigger,
    SidebarInset,
} from "@/components/ui/sidebar";
import AdminSidebarMenu from "./AdminSidebarMenu";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { userColumns } from "./users/columns";
import { AddUserButton, AddUserDialog, UserActions, useUsersState } from "./users/ui";
import { serviceColumns } from "./services/columns";
import { Row } from "@tanstack/react-table";
import { DataTable } from "./data-table";
import { User } from "../../lib/usersData";
import { ServiceCard } from "@/lib/servicesData";
import { AddServiceButton, AddServiceDialog, ServiceActions, useServicesState } from "./services/ui";
import AdminAuthGuard from "./AdminAuthGuard";
import { useAuth } from "../auth/AuthContext";

export default function AdminDashboard() {
    const { cards, setCards, addCard } = useServicesState();
    const [activeSection, setActiveSection] = useState("dashboard");
    const [addServiceDialogOpen, setAddServiceDialogOpen] = useState(false);
    const { users, setUsers, addDialogOpen, setAddDialogOpen } = useUsersState();
    const { logout, user } = useAuth();

    // User add handler
    const handleAddUser = (user: Omit<User, "id">) => {
        setUsers(prev => [...prev, { ...user, id: Date.now(), name: user.name, email: user.email, status: user.status }]);
        setAddDialogOpen(false);
    };

    // Service add handler
    const handleAddService = (service: Omit<ServiceCard, "id">) => {
        addCard({ ...service });
        setAddServiceDialogOpen(false);
    };

    return (
        <AdminAuthGuard>
            <SidebarProvider>
                <div className="flex min-h-screen bg-gray-50 w-full">
                    <Sidebar variant="sidebar" collapsible="icon" className="border-r">
                        <div className="flex items-center justify-between p-2">
                            <span className="font-bold text-lg sidebar-expanded:block hidden transition-all duration-300">Admin</span>
                            <SidebarTrigger />
                        </div>
                        <AdminSidebarMenu onNavigate={setActiveSection} />
                        {/* Logout button for authenticated users */}
                        {user && (
                          <div className="p-2">
                            <button onClick={logout} className="w-full bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mt-4">Logout</button>
                          </div>
                        )}
                    </Sidebar>
                    <SidebarInset className="flex-1">
                        <div className="mx-auto w-full p-12 max-w-full">
                            {activeSection === "dashboard" && (
                                <>
                                    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <Card className="bg-white shadow-md rounded-lg p-4 text-center">
                                            <CardHeader>
                                                <CardTitle className="text-6xl font-bold">{cards.length}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                Total Services
                                            </CardContent>
                                        </Card>
                                        <Card className="bg-white shadow-md rounded-lg p-4 text-center">
                                            <CardHeader>
                                                <CardTitle className="text-6xl font-bold">{users.length}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                Total Users
                                            </CardContent>
                                        </Card>
                                    </div>
                                </>
                            )}
                            {activeSection === "services" && (
                                <div className="w-full max-w-8xl sidebar-expanded:max-w-6xl mx-auto">
                                    <h2 className="text-2xl font-bold mb-4">Services</h2>
                                    <DataTable
                                        columns={serviceColumns.map(col => {
                                            if (col.id === "actions") {
                                                return {
                                                    ...col,
                                                    cell: ({ row }: { row: Row<ServiceCard> }) => (
                                                        <ServiceActions row={row} services={cards} setServices={fn => setCards(typeof fn === "function" ? fn(cards) : fn)} />
                                                    ),
                                                };
                                            }
                                            return col;
                                        })}
                                        data={cards}
                                        filterKey="title"
                                        filterPlaceholder="Filter services by title..."
                                        extraToolbar={
                                            <AddServiceButton onClick={() => setAddServiceDialogOpen(true)} />
                                        }
                                    />
                                    <AddServiceDialog open={addServiceDialogOpen} onOpenChange={setAddServiceDialogOpen} onAddService={handleAddService} />
                                </div>
                            )}
                            {activeSection === "users" && (
                                <div className="w-full max-w-8xl sidebar-expanded:max-w-6xl mx-auto">
                                    <h2 className="text-2xl font-bold mb-4">Users</h2>
                                    <DataTable
                                        columns={userColumns.map(col =>
                                            col.id === "actions"
                                                ? { ...col, cell: ({ row }: { row: Row<User> }) => <UserActions row={row} users={users} setUsers={setUsers} /> } as typeof col
                                                : col
                                        )}
                                        data={users}
                                        filterKey="name"
                                        filterPlaceholder="Filter users by name..."
                                        extraToolbar={<AddUserButton onClick={() => setAddDialogOpen(true)} />}
                                    />
                                    <AddUserDialog open={addDialogOpen} onOpenChange={setAddDialogOpen} onAddUser={handleAddUser} />
                                </div>
                            )}
                            {activeSection === "settings" && (
                                <AdminSettings />
                            )}
                        </div>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </AdminAuthGuard>
    );
}

// Settings component for admin dashboard
function AdminSettings() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <div className="max-w-lg mx-auto bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
      <div className="mb-2"><b>Username:</b> {user.username}</div>
      <div className="mb-2"><b>Role:</b> {user.role}</div>
      {/* Add more settings here as needed */}
      {user.role === "superadmin" && (
        <div className="mt-4 p-2 bg-yellow-100 rounded text-yellow-800">
          <b>Superadmin:</b> You have full access to all settings.
        </div>
      )}
      {user.role === "admin" && (
        <div className="mt-4 p-2 bg-blue-100 rounded text-blue-800">
          <b>Admin:</b> Limited access. Contact a superadmin for more options.
        </div>
      )}
    </div>
  );
}
