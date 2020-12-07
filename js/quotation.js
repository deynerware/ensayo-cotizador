function main(){
    return {
        product: {
            weight: 'peso',
            valueKilo: 'valor del kilo',
            flag: 'banderazo',
            valueVar: 'valor variable',
            percentageMaterial: 'porcentaje',
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
        time: 'tiempo',
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
        },
        rolado: function(){
            this.total = (this.product.valueKilo * this.weightKilos) * this.product.percentageMaterial;
        },
        laser: function(){
            this.total = (this.product.valueKilo * this.weightKilos) * this.time;
        },
        paint: function(){
            this.total = (this.quote.large * this.quote.width) * (this.product.valueKilo * this.product.percentageMaterial);
        }
    }
}