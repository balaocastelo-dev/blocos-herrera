document.addEventListener('alpine:init', () => {
    Alpine.data('materialCalculator', () => ({
        area: 0,
        length: 0,
        height: 0,
        calcMode: 'area', // 'area' or 'dims'
        
        results: {
            blocks: 0,
            cement: 0,
            iron: 0
        },

        calculate() {
            let totalArea = 0;
            if (this.calcMode === 'area') {
                totalArea = parseFloat(this.area) || 0;
            } else {
                totalArea = (parseFloat(this.length) || 0) * (parseFloat(this.height) || 0);
            }

            if (totalArea > 0) {
                // Constants for 14x19x39 blocks
                this.results.blocks = Math.ceil(totalArea * 12.5);
                this.results.cement = Math.ceil(totalArea * 0.5); // Bags
                this.results.iron = Math.ceil(totalArea * 2.5); // Meters
            } else {
                this.results.blocks = 0;
                this.results.cement = 0;
                this.results.iron = 0;
            }
        },

        getWhatsAppLink() {
            const text = `Olá! Fiz um orçamento no site:\nÁrea: ${this.calcMode === 'area' ? this.area + 'm²' : this.length + 'm x ' + this.height + 'm'}\n\n*Necessidade Estimada:*\n- Blocos: ${this.results.blocks}\n- Cimento: ${this.results.cement} sacos\n- Ferro: ${this.results.iron}m\n\nGostaria de validar esse orçamento.`;
            return `https://wa.me/5519984515960?text=${encodeURIComponent(text)}`;
        }
    }))
});
