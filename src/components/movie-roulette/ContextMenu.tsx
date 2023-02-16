import { FC, ReactElement } from "react";
import ContextMenuIcon from "./ContextMenuIcon";
import "./ContextMenu.css";

const ContextMenu : FC = () : ReactElement => 
    <button className="context-menu">
        <span className="icon">
            <ContextMenuIcon />
        </span>
    </button>


export default ContextMenu;