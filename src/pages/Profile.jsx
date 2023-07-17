import { useState } from "react";
import { ArrowLeft, Camera, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import avatarPlaceholder from "../assets/avatar_placeholder.svg";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      newPassword,
      oldPassword,
    };
    await updateProfile(user, avatarFile);
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <div>
      <header className="flex h-[150px] w-screen items-center bg-green-900 px-20 opacity-80"></header>

      <div className="relative z-10 -mt-28 flex justify-center">
        <Link
          to="/"
          className="absolute left-10 top-7 z-20 flex items-center gap-2 font-robotoSlab font-bold text-green-100"
        >
          <ArrowLeft />
          Voltar
        </Link>
        <div className="relative w-fit">
          <img
            src={avatar}
            alt="Foto do Usuário"
            className="h-[224px] w-[224px] rounded-full object-cover outline outline-2 outline-offset-4 outline-green-400"
          />
          <label
            htmlFor="image-input"
            className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-green-100 p-3 outline outline-2 outline-green-950 transition-transform hover:scale-105"
          >
            <Camera />
            <input
              type="file"
              id="image-input"
              className="hidden"
              onChange={handleChangeAvatar}
            />
          </label>
        </div>
      </div>

      <form className="m-auto mt-20 max-w-[350px] space-y-5">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Nome de Usuário"
            icon={<User />}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="exemplo@email.com"
            icon={<Mail />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Senha atual"
            icon={<Lock />}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nova senha"
            icon={<Lock />}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <Button title="Salvar" type="button" onClick={handleUpdate} />
      </form>
    </div>
  );
}
