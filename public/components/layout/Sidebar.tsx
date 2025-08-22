import {
    BarChart3,
    Calendar,
    ChevronDown,
    CreditCard,
    FileText,
    LayoutDashboard,
    type LucideIcon,
    MessageSquare,
    Package,
    Settings,
    ShoppingBag,
    Users,
    Zap,
} from "lucide-react";
import * as React from "react";

// Define the SubMenu interface
export interface SubMenu {
    id: string;
    label: string;
}

// Define the MenuItem interface
export interface MenuItem {
    id: string;
    icon: LucideIcon;
    label: string;
    active?: boolean; // Make active optional
    badge?: string; // Make badge optional
    count?: string; // Use string for count to match data
    submenu?: SubMenu[]; // Make submenu optional
}

const menuItems: MenuItem[] = [
    {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
        badge: "New",
    },
    {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        submenu: [
            {id: "overview", label: "Overview"},
            {id: "reports", label: "Reports"},
            {id: "insights", label: "Insights"},
        ],
        active: false,
        badge: "",
    },
    {
        id: "users",
        icon: Users,
        label: "Users",
        count: "2.4K",
        submenu: [
            {id: "all-users", label: "All Users"},
            {id: "roles", label: "Roles"},
            {id: "activity", label: "User Activity"},
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        label: "E-commerce",
        submenu: [
            {id: "products", label: "Products"},
            {id: "orders", label: "Orders"},
            {id: "customers", label: "Customers"},
        ],
        active: false,
        badge: "",
    },
    {
        id: "inventory",
        icon: Package,
        label: "Inventory",
        count: "847",
    },
    {
        id: "transactions",
        icon: CreditCard,
        label: "Transactions",
    },
    {
        id: "messages",
        icon: MessageSquare,
        label: "Messages",
        badge: "12",
    },
    {
        id: "calendar",
        icon: Calendar,
        label: "Calendar",
    },
    {
        id: "reports",
        icon: FileText,
        label: "Reports",
    },
    {
        id: "settings",
        icon: Settings,
        label: "Settings",
    },
];

interface SidebarProps {
    collapsed?: boolean;
    onToggle?: () => void;
    currentPage?: string;

    onPageChange?(e: string): void;
}

const Sidebar: React.FC<SidebarProps> = ({collapsed, onToggle, currentPage, onPageChange}) => {
    const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set(["analytics"]));
    const toggleExpanded = (itemId) => {
        const newExpanded = new Set(expandedItems);

        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        } else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    }

    return (
        <div
            className={`${collapsed ? "w-20" : "w-72"} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10"}`}
        >
            {/* Logo */}
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center space-x-3">
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                    >
                        <Zap className="w-6 h-6 text-white"/>
                    </div>

                    {/*Conditional Rendering*/}
                    {!collapsed && (
                        <div>
                            <h1 className="text-xl font-bold text-shadow-slate-800 dark:text-white">
                                Nexus
                            </h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Admin Panel
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {menuItems.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <button
                                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${currentPage === item.id || item.active ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/500"}`}
                                onClick={() => {
                                    if (item.submenu) {
                                        toggleExpanded(item.id)
                                    } else {
                                        if (onPageChange) {
                                            onPageChange(item.id);
                                        }
                                    }
                                }}
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon className="w-5 h-5"/>
                                </div>
                                {/*Conditional Rendering*/}
                                    {!collapsed && (
                                        <>
                                        <span className="font-medium ml-2">{item.label}</span>

                                    {
                                        item.badge && (
                                        <span className={`px-2 py-1 text-xs bg-red-500 text-white rounded-full`}>
                                            {item.badge}
                                        </span>
                                )
                                }

                                {
                                item.count && (
                                <span
                                    className={`px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full`}>
                                            {item.count}
                                        </span>
                                )}
                                        </>
                                )}

                            {
                                !collapsed && item.submenu && (
                                    <ChevronDown className={`w-4 h-4 transition-transform`}/>
                                )
                            }
                        </button>
                {/*    Submenus */
                }
                {
                    !collapsed && item.submenu && expandedItems.has(item.id) && (
                        <div className="ml-8 mt-2 space-y-1">
                            {item.submenu.map((submenu) => {
                                return (
                                    <button
                                        className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-shadow-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                                        key={submenu.id}>
                                        {submenu.label}
                                    </button>
                                )
                            })}
                        </div>
                    )
                }

                </div>
                )
                })}
            </nav>

            {/* User Profile */}
            {!collapsed && (<div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <img
                        src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2"
                        alt="User"
                        className="w-10 h-10 rounded-full ring-2 ring-blue-500"
                    />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                            John Doe
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Sidebar;