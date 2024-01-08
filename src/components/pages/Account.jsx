// import { AuthData } from "../../auth/AuthWrapper";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { useAuth } from "../../hooks/useAuth";
import { MultiSelect } from "primereact/multiselect";

export const Account = () => {
  //   const { user } = AuthData();
  const { user } = useAuth();
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <div className="page">
      <h2 class="text-3xl font-bold underline">Your Account</h2>
      <p>Username: {user}</p>
      <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
        <MultiSelect
          value={selectedCities}
          onChange={(e) => setSelectedCities(e.value)}
          options={cities}
          optionLabel="name"
          display="chip"
          placeholder="Select Cities"
          maxSelectedLabels={10}
          className="w-full md:w-20rem"
        />
      </div>
    </div>
  );
};
