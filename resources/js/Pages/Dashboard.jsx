import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-[22px] pb-3">Features List</h1>
                            <hr />
                            <ul className="mt-5">
                                <li>Workshops CRUD</li>
                                <li>Teachers CRUD</li>
                                <li>Members CRUD</li>
                                <li>Payments Data</li>
                                <li>Calendar for workshops</li>
                                <li>Docs import/export</li>
                                <li>Email notifications</li>
                                <li>Todo's/Notes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-[22px] pb-3">
                                Backend - Migrations, Models
                            </h1>
                            <hr />
                            <ul className="mt-5">
                                <li>Workshops</li>
                                <li>Teachers</li>
                                <li>Members</li>
                                <li>Payments</li>
                                <li>Schedlue?</li>
                                <li>Calendar</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-3">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-[22px] pb-3">Frontend</h1>
                            <hr />
                            <ul className="mt-5">
                                <li>Material UI</li>
                                <li>React table package</li>
                                <li>Toast library</li>
                                <li>Calendar</li>
                                <li>Charts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
