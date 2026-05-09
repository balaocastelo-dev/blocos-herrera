"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface AdminData {
  [key: string]: {
    img?: string;
    price?: string;
  };
}

interface AdminContextType {
  siteData: AdminData;
  updateItem: (id: string, field: 'img' | 'price', value: string) => void;
  resetData: () => void;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used within an AdminProvider");
  return context;
};

const SECRET_CODE = "56676009";
const STORAGE_KEY = "herrera_materiais_admin_data";

export default function AdminProvider({ children }: { children: React.ReactNode }) {
  const [siteData, setSiteData] = useState<AdminData>({});
  const [isVisible, setIsVisible] = useState(false);
  const [inputBuffer, setInputBuffer] = useState("");

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setSiteData(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing admin data", e);
      }
    }
  }, []);

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newBuffer = (inputBuffer + e.key).slice(-SECRET_CODE.length);
      setInputBuffer(newBuffer);
      if (newBuffer === SECRET_CODE) {
        setIsVisible(true);
        setInputBuffer("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputBuffer]);

  const updateItem = useCallback((id: string, field: 'img' | 'price', value: string) => {
    setSiteData(prev => {
      const newData = {
        ...prev,
        [id]: {
          ...prev[id],
          [field]: value
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      return newData;
    });
  }, []);

  const resetData = useCallback(() => {
    if (confirm("Tem certeza que deseja resetar TODAS as alterações?")) {
      localStorage.removeItem(STORAGE_KEY);
      setSiteData({});
      location.reload();
    }
  }, []);

  return (
    <AdminContext.Provider value={{ siteData, updateItem, resetData, isVisible, setIsVisible }}>
      {children}
      {isVisible && <AdminPanel />}
    </AdminContext.Provider>
  );
}

function AdminPanel() {
  const { siteData, updateItem, resetData, setIsVisible } = useAdmin();
  const [editables, setEditables] = useState<string[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-admin-id]');
    const ids = Array.from(new Set(Array.from(elements).map(el => el.getAttribute('data-admin-id')!)));
    setEditables(ids);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Painel Admin - Herrera Materiais para construcao e fabrica de blocos</h2>
        <p className="mb-6 text-gray-600">Edite as URLs das fotos e os preços dos itens identificados.</p>
        
        <div className="space-y-6">
          {editables.map(id => (
            <div key={id} className="pb-4 border-b border-gray-100">
              <p className="font-bold mb-2">Item: {id}</p>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-bold">URL da Foto</label>
                  <input 
                    type="text" 
                    defaultValue={siteData[id]?.img || ""}
                    onBlur={(e) => updateItem(id, 'img', e.target.value)}
                    placeholder="https://..."
                    className="w-full p-2 border rounded border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-bold">Preço</label>
                  <input 
                    type="text" 
                    defaultValue={siteData[id]?.price || ""}
                    onBlur={(e) => updateItem(id, 'price', e.target.value)}
                    placeholder="R$ 0,00"
                    className="w-full p-2 border rounded border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
          {editables.length === 0 && (
            <p className="text-red-500">Nenhum item editável encontrado nesta página.</p>
          )}
        </div>

        <div className="flex gap-4 mt-8">
          <button 
            onClick={() => setIsVisible(false)}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-700 transition"
          >
            Fechar e Ver Alterações
          </button>
          <button 
            onClick={resetData}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition"
          >
            Resetar Tudo
          </button>
        </div>
      </div>
    </div>
  );
}
