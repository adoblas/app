import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin: 30px 200px;
`;

export const NewDogForm = ({ handleNewDog }) => {
  const [name, setName] = useState("");
  const [bread, setBread] = useState("");
  const [sex, setSex] = useState("macho");
  const [vaccines, setVaccines] = useState({ rabies: false, parvovirus: false, hepatitis: false, distemper: false });
  const [fixed, setFixed] = useState(false);
  const [lastHeat, setLastHeat] = useState(null);
  const [chip, SetChip] = useState("");
  const [character, setCharacter] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  console.log(vaccines);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        handleNewDog("dog", { name, bread, sex, vaccinated, fixed, lastHeat, chip, character, user, pass });
      }}
    >
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Nombre
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="bread" className="col-sm-2 col-form-label">
          Raza
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="bread" value={bread} onChange={e => setBread(e.target.value)} />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Sexo</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sex" id="male" value={sex} onChange={e => setSex(e.target.id)} />
              <label className="form-check-label" htmlFor="male">
                Macho
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sex" id="female" value={sex} onChange={e => setSex(e.target.id)} />
              <label className="form-check-label" htmlFor="female">
                Hembra
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
        <div className="col-sm-2">Castrado</div>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="fixed" checked={fixed} onChange={e => setFixed(!fixed)} />
            <label className="form-check-label" htmlFor="female">
              {fixed ? "Si" : "No"}
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-2">Vacunas</div>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="vaccines" checked={vaccines.rabies} onChange={e => setVaccines({ ...vaccines, rabies: e.target.checked })} />
            <label className="form-check-label" htmlFor="female">
              Antirábica
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="vaccines" checked={vaccines.parvovirus} onChange={e => setVaccines({ ...vaccines, parvovirus: e.target.checked })} />
            <label className="form-check-label" htmlFor="female">
              Parvovirus
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="vaccines" checked={vaccines.hepatitis} onChange={e => setVaccines({ ...vaccines, hepatitis: e.target.checked })} />
            <label className="form-check-label" htmlFor="female">
              Hepatitis
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="vaccines" checked={vaccines.distemper} onChange={e => setVaccines({ ...vaccines, distemper: e.target.checked })} />
            <label className="form-check-label" htmlFor="female">
              Moquillo
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            + Añadir
          </button>
        </div>
      </div>
    </Form>
  );
};

export default NewDogForm;