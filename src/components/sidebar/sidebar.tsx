import * as React from "react";
import RBSidebarMenu from "react-bootstrap-sidebar-menu";
import "./sidebar-menu.scss"

export type SidebarEntry = {
    key: string,
    name: string,
    icon: React.ReactElement,
    content: () => React.ReactElement
    alias?: string
}

export type SidebarCategory = {
    name: string,
    entries: Array<SidebarEntry>
}

export function flattenListWithLookup(list: Array<SidebarCategory>) {
    let lookup: {[k: string]: SidebarEntry} = {};

    list.forEach(item => {
        item.entries.forEach(child => {
            if (!child.alias) {
                lookup[child.key] = child;
            }
        });
    });

  return lookup;
}


export function SidebarMenu({activeKey, setActiveKey, categories}: {activeKey: string|null, setActiveKey: (k: string|null) => void, categories: Array<SidebarCategory>}) {
    return (
        <>
            <RBSidebarMenu
                variant={'light'}
                bg={'light'}
                expanded={true}
                defaultExpanded={true}
                activeKey={activeKey as string}
                onSelect={(e: any)=>setActiveKey(e)}
                expand="lg"
                hide="lg"
            >
                <RBSidebarMenu.Collapse>
                    {/*<RBSidebarMenu.Header>*/}
                    {/*    <RBSidebarMenu.Brand>/!* brand icon *!/</RBSidebarMenu.Brand>*/}
                    {/*    /!*<RBSidebarMenu.Toggle />*!/*/}
                    {/*</RBSidebarMenu.Header>*/}
                    <RBSidebarMenu.Body>
                        <RBSidebarMenu.Nav>
                            {
                                categories.map((category: SidebarCategory) => {
                                    return (
                                        <RBSidebarMenu.Sub>
                                            <RBSidebarMenu.Sub.Toggle>
                                                <RBSidebarMenu.Nav.Icon />
                                                <RBSidebarMenu.Nav.Title>{category.name}</RBSidebarMenu.Nav.Title>
                                            </RBSidebarMenu.Sub.Toggle>
                                            <RBSidebarMenu.Sub.Collapse>
                                                <RBSidebarMenu.Nav>
                                                    {
                                                        category.entries.map((technique) => {
                                                            return (
                                                                <RBSidebarMenu.Nav.Link eventKey={technique.key}>
                                                                    <RBSidebarMenu.Nav.Icon>{technique.icon}</RBSidebarMenu.Nav.Icon>
                                                                    <RBSidebarMenu.Nav.Title>{technique.name}</RBSidebarMenu.Nav.Title>
                                                                </RBSidebarMenu.Nav.Link>
                                                            )
                                                        })
                                                    }
                                                </RBSidebarMenu.Nav>
                                            </RBSidebarMenu.Sub.Collapse>
                                        </RBSidebarMenu.Sub>)
                                })
                            }
                        </RBSidebarMenu.Nav>
                    </RBSidebarMenu.Body>
                </RBSidebarMenu.Collapse>
            </RBSidebarMenu>
        </>
        );
}