import React from 'react';

const registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div class="form-control w-3/4 mx-auto my-5 border ">
      <h1 className="text-4xl font-bold my-5"> Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label class="label ">
          <span class="label-text text-xl font-bold w-3/4"> First Name</span>
        </label>
        <input
          type="text"
          placeholder="Type Your First Name Here"
          class="input input-bordered w-3/4 max-w-xs"
          {...register("FirstName", {
            required: true,
            maxLength: {
              value: 20,
              message: "errors",
            },
            minLength: 3,
          })}
        />
        <label class="label ">
          <span class="label-text text-xl font-bold w-3/4"> Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Type Your last  Name Here"
          class="input input-bordered w-3/4 max-w-xs"
          {...register("LastName", {
            required: true,
            maxLength: {
              value: 20,
              message: "errors",
            },
            minLength: 3,
          })}
        />
        <label>
          <span class="text-red-500">
            {errors.Name?.type === "required" && "Name is required"}
            {errors.Name?.type === "maxLength" && "Max Name Length is 25"}
            {errors.Name?.type === "minLength" && "Min  Length is 3"}
          </span>
        </label>
        <label class="label ">
          <span class="label-text text-xl font-bold w-3/4"> User Name</span>
        </label>
        <input
          type="text"
          placeholder="Type Your User Name Here"
          class="input input-bordered w-3/4 max-w-xs"
          {...register("UserName", {
            required: true,
            maxLength: {
              value: 20,
              message: "errors",
            },
            minLength: 3,
          })}
        />
        <label class="label ">
          <span class="label-text text-xl font-bold w-3/4"> Passward</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Password Here"
          class="input input-bordered w-3/4 max-w-xs"
          {...register("Passward", {
            required: true,
            minLength: 8,
          })}
        />
        <label>
          <span class="text-red-500">
            {errors.Passward?.type === "required" && "Name is required"}
            {errors.Passward?.type === "minLength" && "Min  Length is 8"}
          </span>
        </label>
        <label class="label">
          <span class="label-text text-xl font-bold w-3/4"> User Email</span>
        </label>
        <input
          type="text"
          placeholder="Type Your Email Here"
          class="input input-bordered w-full max-w-xs"
          {...register("Email", {
            required: true,
            pattern: {
              value:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
              message: "errors",
            },
          })}
        />
        <label>
          <span class="text-red-500">
            {errors.Email?.type === "required" && "Email is required"}
            {errors.Email?.type === "pattern" && "* Please Enter a Valid Mail"}
          </span>
        </label>

        <label class="label">
          <span class="label-text text-xl font-bold w-3/4"> Phone Number </span>
        </label>
        <input
          type="number"
          placeholder="Type Your Phone Number"
          class="input input-bordered w-full max-w-xs w-3/4"
          {...register("Phone", {
            required: false,
            minLength: {
              value: 11,
              message: "errors",
            },
            maxLength: {
              value: 15,
              message: "errors",
            },
          })}
        />
        <label>
          <span class="text-red-500">
            {errors.Phone?.type === "minLength" &&
              "* Phone number must be 11 digit"}
            {errors.Phone?.type === "maxLength" &&
              "* Phone number must be 11 digit"}
          </span>
        </label>

        <label class="label">
          <span class="label-text text-xl font-bold w-3/4">
            {" "}
            Date of Birth{" "}
          </span>
        </label>
        <input
          type="date"
          placeholder="Your Date of Birth"
          class="input input-bordered w-full max-w-xs"
          {...register("DB", {
            required: true,
            validate: (value) => new Date() - value > "18" || "error message",
            valueAsDate: true,
          })}
        />
        <label>
          <span class="text-red-500">
            {errors.DB?.type === "validate" && "* Age Must be over 18 "}
          </span>
        </label>

        <input type="submit" class=" btn m-5 block  mx-auto" />
      </form>
    </div>
  );
};
export default registration;