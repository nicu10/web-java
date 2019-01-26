
var calculator = new Vue({
  el: '#calculator',
  data: {
    selectedCar: null,
    selectedColor: null,
    selectedMotor: null,
	selectedGlas: null,
    orderPrice: 0, 

    carList: [
      {
        name: 'BMW X5',
        price: 15000
      },
      {
        name: 'Lada 5',
        price: 1000
      },
      {
        name: 'jaguar',
        price: 30000
      },
      {
        name: 'Bentli',
        price: 25000
      }
    ], 
    carColor: [
      {
        name: 'red',
        price: 100
      },
      {
        name: 'blue',
        price: 200
      },
       {
        name: 'Black',
        price: 150
      },
       {
        name: 'White',
        price: 250
      }
    ],
    carMotor: [
      {
        name: '1.2',
        price: 100
      },
      {
        name: '1.4',
        price: 150
      },
       {
        name: '1.6',
        price: 200
      },
       {
        name: '2.0',
        price: 250
      }],
	  carGlas: [
      {
        name: 'tindet',
        price: 300
      },
      {
        name: 'simple',
        price: 50
      },
       {
        name: 'bulletproof',
        price: 500
      },
       {
        name: 'bulletproof+tindet',
        price: 800
      }
    ]
   
  },
  methods: {
    calcul(){
      this.orderPrice = (this.selectedCar !== null ? this.selectedCar.price : 0) + 
      (this.selectedColor !== null ? this.selectedColor.price : 0) + 
        (this.selectedMotor !== null ? this.selectedMotor.price : 0) + 
        (this.selectedGlas !== null ? this.selectedGlas.price : 0);
  },
      remove(){
	  this.orderPrice= null;
	  this.selectedCar = null;
	  this.selectedColor = null;
	  this.selectedMotor = null;
	  this.selectedGlas = null;
    }
}})
