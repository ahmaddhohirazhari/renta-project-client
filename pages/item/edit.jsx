import React from "react";
import Image from "next/image";
import defaultItem from "../../public/defaultPhotoItem.png";
import Header from "../../components/Header/Header.jsx";
import Footer from "components/Footer";
export default function addItem() {
  const isError = true;
  const message = true;
  const form = [
    {
      name: "Name",
      type: "text",
    },
    {
      name: "Location",
      type: "text",
    },
    { name: "Description", type: "text" },
  ];

  return (
    <>
      <Header />
      <div
        className="container  shadow  position-relative  mt-5 mb-md-5  "
        style={{
          padding: "5% ",
          borderRadius: "25px",
          width: "70% ",
          fontSize: "75%",
        }}
      >
        <div className="d-flex align-items-center mb-4 mb-md-3 ">
          <button
            className="btn px-1 py-0 me-2 button-update-profile"
            onClick={() => router.back()}
          >
            <i className="bi bi-chevron-left fw-bold"></i>
          </button>
          <h2 className="fs-5 fw-bold m-0">Edit Item</h2>
        </div>
        <div className="row item-row">
          <div className="col-md-5 h-100  ">
            <div className=" bg-light vh-50 w-60 pt-5 pb-5 pe-md-5 ps-md-5 d-flex  justify-content-center">
              <div className="d-inline">
                <div
                  className="text-center mx-auto my-auto pt-md-5 pb-md-5 "
                  style={{ height: "20%", width: "20%" }}
                >
                  <Image
                    className=""
                    src={defaultItem}
                    alt="itempicture"
                    width={200}
                    height={200}
                    objectFit="cover"
                  />
                </div>
                <button
                  className="btn py-0 mb-0 ms-3  mt-3 text-center "
                  data-bs-toggle="modal"
                  data-bs-target="#editImageModal"
                >
                  Click to add image
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-5 h-100 mb-4 mb-md-0  text-start">
            {form.map((info, index) => (
              <div
                className="  mb-1 d-flex  align-items-center border-bottom"
                key={index}
              >
                <div>
                  <input
                    className=" mb-2 border-0"
                    type={info.type}
                    placeholder={info.name}
                  />
                </div>
              </div>
            ))}
            <label htmlFor="" className="mt-2 fw-bold">
              Price:
            </label>
            <div class="input-group mb-3 ">
              <input
                type="text"
                class="form-control bg-light"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <select
              class="form-select form-select-md mb-3"
              aria-label=".form-select-md fs-6 example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="" className="mt-2 mb-2 fw-bold">
              Stock:
            </label>
          </div>

          <div className="d-flex justify-content-center  mt-3 gap-2 ">
            <select
              class="form-select form-select-md mb-3 btn  shadow btn-dark  btn-sm rounded h-100  text-warning "
              style={{ width: "50%", fontSize: "100%" }}
              aria-label=".form-select-md fs-6 example"
            >
              <option selected>Add Item To</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button
              className="btn  btn-warning shadow rounded  "
              style={{ width: "50%", fontSize: "100%" }}
            >
              Save Item
            </button>
            <button
              className="btn  btn-dark shadow rounded  text-warning "
              style={{ width: "50%", fontSize: "100%" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* Edit Profile Image Modal */}
      <div
        className="modal fade"
        id="editImageModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="editImageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content px-3 py-2"
            style={{ borderRadius: "20px" }}
          >
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="editImageModalLabel">
                Add Image
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body text-center">
                <label
                  htmlFor="formFile"
                  className="form-label update-image-input d-inline-block mb-0 position-relative"
                >
                  <Image
                    src={defaultItem}
                    alt="profile image preview"
                    width={120}
                    height={120}
                    objectFit="cover"
                    style={{ borderRadius: "16px" }}
                  />
                  <div className="update-image__overlay position-absolute top-0 start-0 justify-content-center align-items-center">
                    <span className="text-white fw-semibold align-middle d-block">
                      Upload
                      <br />
                      image
                    </span>
                  </div>
                </label>
                <input
                  className="form-control visually-hidden"
                  type="file"
                  id="formFile"
                />
              </div>
              {message ? (
                isError ? (
                  <p className="text-danger text-center mb-0">{message}</p>
                ) : (
                  <p className="text-success text-center mb-0">{message}</p>
                )
              ) : null}
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-outline-danger px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmDeleteModal"
                >
                  Delete
                </button>
                <button type="submit" className="btn btn-primary px-4">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
