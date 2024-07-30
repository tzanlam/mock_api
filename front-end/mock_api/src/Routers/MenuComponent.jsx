import React from "react";
import TabPaneComponent from "./TabPaneComponent";
import { menuItems, footerItems } from "./DataMenu";
const Menu = () => <TabPaneComponent items={menuItems} />;
const MenuFooter = () => <TabPaneComponent items={footerItems} />;

export { Menu, MenuFooter };
