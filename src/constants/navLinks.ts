interface NavigationLink {
    title: string;
    href: string;
}

export const navigationLinks: NavigationLink[][] = [
    [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Exam Emergency", href: "/exam-emergency" },
        { title: "Notification", href: "/notification" },
        { title: "Scouts", href: "/scouts" },
        { title: "Events", href: "/events" },
        { title: "Contact", href: "/contact" },
    ],
    [
        { title: "Gallery", href: "/gallery" },
        { title: "Initiatives", href: "/initiatives" },
        { title: "Complaints", href: "/complaints" },
        { title: "Model Schools", href: "/model-schools" },
        { title: "Articles", href: "/articles" },
        { title: "Sports", href: "/sports" },
        { title: "Enrollment Campaign", href: "/enrollment-campaign" },
        { title: "Team", href: "/team" },
    ],
];

export const secondGroupHrefs = navigationLinks[1].map((link) => link.href);
