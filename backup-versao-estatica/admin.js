(function() {
    let inputBuffer = "";
    const secretCode = "56676009";
    const storageKey = "olaria_herrera_admin_data";

    // Carregar dados salvos
    let siteData = JSON.parse(localStorage.getItem(storageKey) || "{}");

    // Função para aplicar dados salvos na página
    function applySavedData() {
        // Atualizar imagens
        document.querySelectorAll('img[data-admin-id]').forEach(img => {
            const id = img.getAttribute('data-admin-id');
            if (siteData[id] && siteData[id].img) {
                img.src = siteData[id].img;
            }
        });

        // Atualizar preços
        document.querySelectorAll('[data-admin-id][data-admin-type="price"]').forEach(el => {
            const id = el.getAttribute('data-admin-id');
            if (siteData[id] && siteData[id].price) {
                el.textContent = siteData[id].price;
            }
        });
    }

    // Detectar digitação do código secreto
    window.addEventListener("keydown", (e) => {
        inputBuffer += e.key;
        if (inputBuffer.length > secretCode.length) {
            inputBuffer = inputBuffer.slice(-secretCode.length);
        }
        if (inputBuffer === secretCode) {
            showAdminPanel();
            inputBuffer = "";
        }
    });

    function showAdminPanel() {
        if (document.getElementById('admin-panel-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'admin-panel-overlay';
        overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:9999; display:flex; align-items:center; justify-content:center; font-family: sans-serif;';
        
        const panel = document.createElement('div');
        panel.style.cssText = 'background:white; padding:2rem; border-radius:1rem; width:90%; max-width:600px; max-height:80vh; overflow-y:auto; position:relative;';
        
        let html = `<h2 style="font-size:1.5rem; font-weight:bold; margin-bottom:1rem; color:#ea580c;">Painel Admin - Olaria Herrera</h2>
                    <p style="margin-bottom:1.5rem; color:#666;">Edite as URLs das fotos e os preços dos itens identificados.</p>
                    <div id="admin-items-list">`;

        // Coletar todos os itens editáveis na página atual
        const editables = new Set();
        document.querySelectorAll('[data-admin-id]').forEach(el => {
            editables.add(el.getAttribute('data-admin-id'));
        });

        editables.forEach(id => {
            const currentImg = siteData[id]?.img || "";
            const currentPrice = siteData[id]?.price || "";
            
            html += `<div style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid #eee;">
                        <p style="font-weight:bold; margin-bottom:0.5rem;">Item: ${id}</p>
                        <div style="margin-bottom:0.5rem;">
                            <label style="display:block; font-size:0.8rem; color:#888;">URL da Foto:</label>
                            <input type="text" data-id="${id}" data-field="img" value="${currentImg}" placeholder="https://..." style="width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; color:#888;">Preço (ex: R$ 37,50):</label>
                            <input type="text" data-id="${id}" data-field="price" value="${currentPrice}" placeholder="R$ 0,00" style="width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                        </div>
                    </div>`;
        });

        if (editables.size === 0) {
            html += `<p style="color:red;">Nenhum item editável encontrado nesta página. Certifique-se de que os elementos possuem o atributo data-admin-id.</p>`;
        }

        html += `</div>
                 <div style="display:flex; gap:1rem; margin-top:1.5rem; flex-wrap:wrap;">
                    <button id="admin-save" style="background:#ea580c; color:white; border:none; padding:0.75rem 1.5rem; border-radius:0.5rem; font-weight:bold; cursor:pointer;">Salvar Alterações</button>
                    <button id="admin-reset" style="background:#ef4444; color:white; border:none; padding:0.75rem 1.5rem; border-radius:0.5rem; font-weight:bold; cursor:pointer;">Resetar Tudo</button>
                    <button id="admin-close" style="background:#eee; color:#333; border:none; padding:0.75rem 1.5rem; border-radius:0.5rem; font-weight:bold; cursor:pointer;">Fechar</button>
                 </div>`;

        panel.innerHTML = html;
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        document.getElementById('admin-save').onclick = () => {
            const inputs = panel.querySelectorAll('input[data-id]');
            inputs.forEach(input => {
                const id = input.getAttribute('data-id');
                const field = input.getAttribute('data-field');
                if (!siteData[id]) siteData[id] = {};
                siteData[id][field] = input.value;
            });
            localStorage.setItem(storageKey, JSON.stringify(siteData));
            applySavedData();
            alert("Alterações salvas com sucesso!");
            overlay.remove();
        };

        document.getElementById('admin-reset').onclick = () => {
            if (confirm("Tem certeza que deseja resetar TODAS as alterações de preços e fotos?")) {
                localStorage.removeItem(storageKey);
                location.reload();
            }
        };

        document.getElementById('admin-close').onclick = () => overlay.remove();
    }

    // Inicializar
    applySavedData();
    // Re-aplicar periodicamente para lidar com conteúdo carregado dinamicamente (como os blocos via JS)
    setInterval(applySavedData, 2000);
})();
