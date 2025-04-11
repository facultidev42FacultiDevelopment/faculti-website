import { FilterOption, NavigationItem } from "../types";

export const navigationItems: NavigationItem[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Categories',
        href: '/categories'
    },
    {
        name: 'Institutions',
        href: '/institutions'
    },
    {
        name: 'About',
        href: '/about'
    }
];

export const filterOptions: FilterOption[] = [
    { id: "video", label: "Videos" },
    { id: "institute", label: "Institutions" },
    { id: "academic", label: "Academics" },
    { id: "topic", label: "Topics" },
    { id: "research", label: "Research Papers" },
    { id: "course", label: "Courses" },
];