function main(){
    return {
        product: {
            weight: 'peso',
            valueKilo: 0,
            flag: 'banderazo',
            valueVar: 'valor variable',
            percentageMaterial: 0,
            factorKilo: 'factor kilo',
            progressiveAdjusment: 'ajuste progresivo',
            thickness: 'espesor',
            coefficient: 'coeficiente',
        },
        quote: {
            large: 'largo',
            width: 'ancho'
        },
        total: 0,
        weightKilos: 0,
        calc: function() {
            this.quantityKilos();
            this.product.factorKilo = this.product.valueKilo * this.product.percentageMaterial;
            this.total = this.product.valueVar + (this.weightKilos * (this.product.factorKilo * (1 - (this.weightKilos / (this.product.weight * this.product.progressiveAdjusment)) * 1)));
        },
        quantityKilos: function(){
            this.weightKilos = this.quote.large
                   * this.quote.width
                   * this.product.thickness
                   * this.product.coefficient
        }
    }
}