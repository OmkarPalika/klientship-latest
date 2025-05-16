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

export default function AdminDashboard() {
    const { cards, setCards, addCard } = useServicesState();
    const [activeSection, setActiveSection] = useState("dashboard");
    const [addServiceDialogOpen, setAddServiceDialogOpen] = useState(false);
    const { users, setUsers, addDialogOpen, setAddDialogOpen } = useUsersState();

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
        <SidebarProvider>
            <div className="flex min-h-screen bg-gray-50 w-full">
                <Sidebar variant="sidebar" collapsible="icon" className="border-r">
                    <div className="flex items-center justify-between p-2">
                        <span className="font-bold text-lg sidebar-expanded:block hidden transition-all duration-300">Admin</span>
                        <SidebarTrigger />
                    </div>
                    <AdminSidebarMenu onNavigate={setActiveSection} />
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
                            <div className="text-xl font-semibold">Settings coming soon...</div>
                        )}
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
