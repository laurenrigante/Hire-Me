import "../styling/profile.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import DeleteModal from "../components/DeleteModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import user from "../assets/user.png";

import johndoe from "../assets/johndoe.jpg";
/**
 * Functional component representing the user profile page.
 * @returns {JSX.Element} User profile page component.
 */
const UserProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userType, setUserType] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setTheRole] = useState(null);
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    async function fetchUserData() {
      let tempData;
      //let role = store("role") || RENTER_OWNER;
      setTheRole("user");
      // Assume store("user") is being used correctly to fetch user-specific data

      if (role === "business") {
        //  tempData = await getCompanyData(store("user"));
        setCompanyName(companyName);
        setUserType("Business");
      } else if (role === "user") {
        //tempData = await getUserData(store("user"));
        setFirstName(firstName);
        setLastName(lastName);
        setUserType("individual user");
      } else {
        throw new Error("Role error");
      }

      // setEmail(tempData.email);
      // setPhoneNumber(tempData.phoneNumber);
      // setImageSrc((await getProfilePicture(store("user"))) || user);
    }

    // fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = async (ev) => {
    ev.preventDefault();

    if (phoneNumber && !/^\d{10}$/.test(phoneNumber))
      return toast.error("Please make sure the phone number format is correct");

    if (role === "business") {
      if (!companyName)
        return toast.error('Please make sure "Company Name" is not empty');

      const formData = {
        companyName,
        phoneNumber,
      };

      //await updateCompanyInfo(store("user"), formData);
    } else {
      if (!firstName)
        return toast.error('Please make sure "First Name" is not empty');
      else if (!lastName)
        return toast.error('Please make sure "Last Name" is not empty');

      const formData = {
        firstName,
        lastName,
        phoneNumber,
      };

      //await updateUserInfo(store("user"), formData);
    }

    toast.success("User info updated successfully");
    setIsEditMode(false);
  };

  //photo change
  const handlePhotoChange = () => {
    let fileInput;
    let photo;
    try {
      fileInput = document.getElementById("customFile");
      photo = fileInput.files[0];

      if (
        photo.type !== "image/png" &&
        photo.type !== "image/jpeg" &&
        photo.type !== "image/jpg"
      ) {
        return toast.error("File not supported");
      }
      if (photo.size > 2097152)
        return toast.error("File must be less than 2 MB");

      try {
        // updateUserPicture(store("user"), photo);
        setImageSrc(photo);
      } catch (e) {
        toast.error(e);
      }
      toast.success("Profile picture updated successfully.");

      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImageSrc(fileReader.result);
      };
      fileReader.readAsDataURL(photo);
    } catch (e) {
      toast.error(e);
    }
  };

  const handleClickDelete = () => {
    setShow(true);
  };

  //delete user
  const handleClose = () => {
    setShow(false);
  };

  //delete function
  const deleteAccountAttempt = async () => {
    try {
      //  await deleteAccount(email);
    } catch (error) {
      toast.error("Error deleting account");
    }
    setShow(false);
    //  store.remove("user");
    //  store.remove("role");
    window.location.href = "/";
  };

  //cancel button
  const handleCancelClick = () => {
    setIsEditMode(false);
    window.location.reload();
  };

  //changes
  const handleFirstNameChange = (ev) => {
    setFirstName(ev.target.value);
  };
  const handleLastNameChange = (ev) => {
    setLastName(ev.target.value);
  };
  const handlePhoneNumberChange = (ev) => {
    setPhoneNumber(ev.target.value);
  };
  const handleCompanyNameChange = (ev) => {
    setCompanyName(ev.target.value);
  };
  const handleCurrentPasswordChange = (ev) => {
    setCurrentPassword(ev.target.value);
  };
  const handleNewPasswordChange = (ev) => {
    setNewPassword(ev.target.value);
  };
  const handleConfirmPasswordChange = (ev) => {
    setConfirmPassword(ev.target.value);
  };

  const handleChangePassword = async (ev) => {
    ev.preventDefault();

    const dataForm = {
      currentPassword,
      newPassword,
      email,
    };

    if (!currentPassword || !newPassword || !confirmPassword)
      return toast.error("Please make sure all password fields are filled out");

    if (newPassword !== confirmPassword)
      return toast.error("New passwords do not match");

    if (newPassword.length < 8)
      return toast.error("Password must be at least 8 characters");

    let data;
    try {
      // data = await changePassword(store("user"), dataForm);
    } catch (err) {
      toast.error(err.message);
    }

    if (data?.message === "Password updated successfully") {
      try {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        toast.success(data.message);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <div>
          <div className="container pt-5">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={johndoe} // Directly using the imported image
                          alt="Profile"
                          className="rounded-circle"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />
                        {/* Upload functionality UI exists but is non-functional */}
                      </div>
                    </div>
                  </div>

                  {role === "business" && (
                    <div className="card mt-3">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-globe mr-2 icon-inline"
                            >
                              <circle cx={12} cy={12} r={10} />
                              <line x1={2} y1={12} x2={22} y2={12} />
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span style={{ marginLeft: "5px" }}>Website</span>
                          </h6>
                          <span className="text-secondary"></span>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram mr-2 icon-inline text-danger"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                            <span style={{ marginLeft: "5px" }}>Instagram</span>
                          </h6>
                          <span className="text-secondary"></span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-facebook mr-2 icon-inline text-primary"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            <span style={{ marginLeft: "5px" }}>Facebook</span>
                          </h6>
                          <span className="text-secondary"></span>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="center-buttons">
                    <button
                      type="button"
                      className="btn btn-danger btn-block mt-2"
                      //onClick={() => handleClickDelete()}
                    >
                      Delete Account
                    </button>
                  </div>

                  {/*EVENTUALLY IMPLEMENT PASSWORD CONFIRMATION*/}
                  <DeleteModal
                    show={show}
                    handleClose={handleClose}
                    handleDeleteItem={deleteAccountAttempt}
                    message={
                      "Are you sure you want to permanently delete your account?"
                    }
                  />
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      {role !== "business" && (
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">First Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {isEditMode ? (
                              <input
                                type="text"
                                className={
                                  "form-control" +
                                  (firstName === "" ? " is-invalid" : "")
                                }
                                name="firstName"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                data-testid="FirstName"
                              />
                            ) : (
                              <span>{firstName ? firstName : "John"}</span>
                            )}
                          </div>
                        </div>
                      )}

                      {role !== "business" && <hr />}

                      {role !== "business" && (
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Last Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {isEditMode ? (
                              <input
                                type="text"
                                className={
                                  "form-control" +
                                  (lastName === "" ? " is-invalid" : "")
                                }
                                name="lastName"
                                value={lastName}
                                onChange={handleLastNameChange}
                                data-testid="LastName"
                              />
                            ) : (
                              <span>{lastName ? lastName : "Doe"}</span>
                            )}
                          </div>
                        </div>
                      )}

                      {role === "business" && (
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Company Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {isEditMode ? (
                              <input
                                type="text"
                                className={
                                  "form-control" +
                                  (companyName === "" ? " is-invalid" : "")
                                }
                                name="Company Name"
                                value={companyName}
                                onChange={handleCompanyNameChange}
                                data-testid="CompanyName"
                              />
                            ) : (
                              <span>{companyName}</span>
                            )}
                          </div>
                        </div>
                      )}
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {isEditMode ? (
                            <input
                              type="text"
                              className={"form-control"}
                              name="email"
                              value={email}
                              disabled
                            />
                          ) : (
                            <span>{email ? email : "john.doe@gmail.com"}</span>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {isEditMode ? (
                            <input
                              type="number"
                              min="0"
                              className="form-control"
                              name="phoneNumber"
                              value={phoneNumber || ""}
                              placeholder="Phone Number"
                              onChange={handlePhoneNumberChange}
                              data-testid="PHONE"
                            />
                          ) : (
                            <span>
                              {phoneNumber ? (
                                phoneNumber
                              ) : (
                                <>+1(XXX) XXX-XXXX</>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-12 d-flex justify-content-between">
                          {isEditMode ? (
                            <>
                              <button
                                className="btn saveChanges"
                                onClick={handleSaveClick}
                              >
                                Save Changes
                              </button>
                              <button
                                className="btn btn-secondary"
                                style={{
                                  width: "250px",
                                }}
                                onClick={() => handleCancelClick()}
                              >
                                Cancel Changes
                              </button>
                            </>
                          ) : (
                            <div className="center-buttons">
                              <div className="center-buttons">
                                <button
                                  className="btn editProfile"
                                  //onClick={() => handleEditClick()}
                                >
                                  Edit Profile
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    className="row gutters-md"
                    onSubmit={handleChangePassword}
                  ></form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
