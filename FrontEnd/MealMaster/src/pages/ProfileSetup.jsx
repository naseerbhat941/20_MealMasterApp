import React, { useState } from "react";
import { motion } from "framer-motion";
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import ButtonComponent from "../Components/ButtonComponent";

const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Keto", "Paleo"];
const fitnessGoals = ["Weight Loss", "Muscle Gain", "Maintain Health"];
const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "Mediterranean"];

export default function ProfileSetup() {
  const [profile, setProfile] = useState({
    name: "",
    dietary: "",
    fitnessGoal: "",
    cuisine: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Profile Saved:", profile);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-lg mx-auto p-6">
      <div className="p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-xl font-bold mb-4">Create Your Profile</h2>
        <InputField type="text" name="name" placeholder="Enter your name" value={profile.name} onChange={handleChange} />
        <SelectField name="dietary" options={dietaryOptions} onChange={handleChange} />
        <SelectField name="fitnessGoal" options={fitnessGoals} onChange={handleChange} />
        <SelectField name="cuisine" options={cuisines} onChange={handleChange} />
        <ButtonComponent onClick={handleSubmit}>Save Profile</ButtonComponent>
      </div>
    </motion.div>
  );
}