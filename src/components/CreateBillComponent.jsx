import React from "react";

const CreateBillComponent = () => {

    const sendData = async(customer, employee, products, amount) =>{
        //https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/guardarFactura
        const myObject = {"nombreCliente": customer, 
        "nombreVendedor":employee,
        "productos": {

        }}
        const response = await fetch("https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/guardarFactura",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: myObject
        })
    }

    const createBill = (e) =>{
        e.preventDefault();
        const customer = e.target.elements.NombreCliente.value;
        const employee = e.target.elements.NombreVendedor.value;
        const products = e.target.elements.Productos.value;
        const total = e.target.elements.Total.value;

        console.log(customer);
        console.log(employee);
        console.log(products);
        console.log(total);
        console.log("Productos seccionados: ", products.replace( /\n/g , ", " ).split( ", " ))
        let newArray = []
        for (let i = 0; i <= products.length-2; i+=2) {
            const element = products[i];
            
        }
        //console.log(Object.fromEntries([products]))


    }

    return (
        <div>
            <form className="center-block" onSubmit={createBill}>
                <div className="mb-3">
                    <label htmlFor="NombreCliente" className="form-label">Nombre Cliente</label>
                    <input type="text" className="form-control" id="NombreCliente" />
                </div>
                <div className="mb-3">
                    <label htmlFor="NombreVendedor" className="form-label">Nombre Asesor</label>
                    <input type="text" className="form-control" id="NombreVendedor" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Productos" className="form-label">Productos</label>
                    <textarea className="form-control" id="Productos" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="Total" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="Total" />
                </div>
                <button type="submit" className="btn btn-success">Crear</button>
            </form>
        </div>
    );
}

export default CreateBillComponent;