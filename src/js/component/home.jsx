import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { FaRegTrashAlt } from "react-icons/fa";
import { fFaPlusrom } from "react-icons/fa";

//create your first component
const Home = () => {
	//hooks
	const [inputtareas, settareas] = useState("");
	const [listatareas, setlistareas] = useState([]); // listatareas, arreglo debe inicializarse en un arreglo vacio
	useEffect(
		() => {
			// el código que pongas aquí se ejecutará solo después de la primera vez que el componente se renderice
			console.log(inputtareas);
			//"mi arreglo  tiene", listatareas.length, "elementos hasta el momento";
			//console.log(listatareas);
		} /*[listatareas]*/
	);

	// funcion que valida que el campo tarea no este vacio y vaya llenanod el arreglo lista tareas
	const validatetareas = () => {
		// === COMPARACIÓN ESTRICTA
		if (inputtareas === "") {
			console.log("El campo tarea no debe estar vacio");
		} else {
			console.log("perfect!");
		}
	};

	let arreglo = [];

	return (
		<>
			<div className="text-center mt-5">
				<h2>to do (Tere)</h2>
				<input
					type="text"
					placeholder="Tipea la tarea por hacer"
					onChange={e => settareas(e.target.value)}
					value={inputtareas}
				/>
				<button
					type="button"
					onClick={() => {
						validatetareas();
						setlistareas([...listatareas, inputtareas]);
					}}>
					Agregar <fFaPlusrom />
				</button>
				<div className="container ">
					<ul className="list-group list-group-flush ">
						{listatareas.map((item, index) => {
							return (
								<li
									className="list-group-item  d-flex w-100 justify-content-between"
									key={index}>
									{item}
									<button
										className="btn btn-light"
										type="button"
										onClick={() => {
											const listaNueva = listatareas.filter(
												key => key !== item
											);
											setlistareas(listaNueva);
											console.log(listaNueva);
											console.log("hola");
											//console.log(entrada)
										}}>
										<i className="fas fa-trash-alt"></i>
									</button>
								</li>
							);
						})}
					</ul>
					<p className="fw-light text-right">{listatareas.length}</p>
				</div>
			</div>
		</>
	);
};

export default Home;
