"use client";

import { useAdmin } from "./AdminProvider";
import React from "react";

interface AdminEditableProps {
  id: string;
  type: 'img' | 'price';
  children: React.ReactElement;
  defaultPrice?: string;
}

export default function AdminEditable({ id, type, children, defaultPrice }: AdminEditableProps) {
  const { siteData } = useAdmin();
  const savedData = siteData[id];

  if (type === 'img') {
    const src = savedData?.img || (children.props as any).src;
    return React.cloneElement(children, { 
      src, 
      "data-admin-id": id 
    } as any);
  }

  if (type === 'price') {
    const text = savedData?.price || defaultPrice || children.props.children;
    return React.cloneElement(children, { 
      children: text,
      "data-admin-id": id,
      "data-admin-type": "price"
    } as any);
  }

  return children;
}
