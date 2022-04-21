import pkg from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "설명이 아직 없습니다. 추가해 주세요.",
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = model("User", UserSchema);
export { UserModel };

//UserModel (DB연결완료)