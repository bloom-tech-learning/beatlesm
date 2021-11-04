import React, { useContext } from "react";
import FamilyContext from './../contexts/FamilyContext';

const Siblings = (props) => {
  const { activeFamily } = useContext(FamilyContext);

  return (
    <section className="parents">
      {activeFamily.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;