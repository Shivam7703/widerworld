// menumobile.tsx

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navigationMenu } from "@/data/homeData";
import { usePathname } from "next/navigation";

interface NavItem {
  id: number | string;
  label: string;
  href: string;
  subNav?: NavItem[];
  subNavv?: NavItem[];
}

interface MenuMobileProps {
  setIsMobileMenuOpen: (value: boolean) => void;
  onItemClick: (href: string) => void;
  onTop: boolean;
}

function formatHref(url:any) {
  if (!url) return "#";

  const parts = url.split("/");
  if (parts[2]) {
    parts[2] = parts[2]
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }

  return parts.join("/");
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  setIsMobileMenuOpen,
  onItemClick,
  onTop
}) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openMenus, setOpenMenus] = useState<Record<string, string | null>>({});

  useEffect(() => {
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
    setActiveItem(lastSegment || "home");
  }, [pathname]);

  const toggleMenu = (level: number, id: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [level]: prev[level] === id ? null : id
    }));
  };

  const renderItems = (items: NavItem[], level = 1) =>
    items.map((item) => {
      const id = String(item.id);
      const children =
        level < 3 ? item.subNav : level === 3 ? item.subNavv : undefined;
      const isOpen = openMenus[level] === id;
      const hasChildren = !!children?.length;
      const padding = ["px-4", "px-8", "px-12"][level - 1] || "px-4";
      const hoverText = onTop ? "hover:text-color2" : "hover:text-color1";
      const textColor =
        activeItem === item.href
          ? "text-color1"
          : onTop
          ? "text-white"
          : "text-black";

      return (
        <div key={`${level}-${id}`}>
          <div className={`flex items-center justify-between ${padding} py-2 ${textColor} ${hoverText}`}>
            <Link title={item.label}
              href={
  item.href?.split("/").length > 2
    ? formatHref(item.href)
    : item.href || "#"
}
              className="whitespace-nowrap transition-all duration-300"
              onClick={() => !hasChildren && handleClick(item.href)}
            >
              {item.label}
            </Link>
            {hasChildren && (
              <IoIosArrowDown
                className={`cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                onClick={() => toggleMenu(level, id)}
              />
            )}
          </div>
          {hasChildren && isOpen && <div>{renderItems(children, level + 1)}</div>}
        </div>
      );
    });

  const handleClick = (href: string) => {
    onItemClick(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <ul className="w-full flex flex-col">
      {[...(navigationMenu?.primaryMenu || []), ...(navigationMenu?.secondaryMenu || [])].map((item) => (
        <li key={item.id} className="border-b border-gray-100/20 last:border-none">
          {renderItems([item], 1)}
        </li>
      ))}

    
    </ul>
  );
};

export default MenuMobile;
