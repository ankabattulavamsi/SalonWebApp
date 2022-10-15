import React, { Component } from "react";
import { Badge, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CommonModal from "../common/CommonModal/CommonModal";
import { ErrorMessage, Form, Formik } from "formik";
import ButtonModal from "../common/ButtonModal/ButtonModal";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Icon from "@mui/material/Icon";
import {
  GallaryData,
  galleryUploadIcon,
} from "../../utils/data/GalleryOwner/Gallery";
import { Inputs } from "../common";
import * as Yup from "yup";
interface GalleryAddModalProps {
  openGalleryAddModal: boolean;
  handleClose: (type?: string) => void;
  editId?: string | number;
  item: GallaryData;
  title?: string;
  image: string;
  onChange: (e?: any) => void;
  handleOnChangeImage: (e?: any) => void;
  onClicOfCloseBadge: () => void;
  handleAdd: () => void;
  handleEdit: (id?: string | number) => void;
}
interface GalleryAddModalState {}
export default class GalleryAddModal extends Component<
  GalleryAddModalProps,
  GalleryAddModalState
> {
  validateSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    image: Yup.string().required("image is required"),
  });
  render() {
    const {
      handleClose,
      onChange,
      openGalleryAddModal,
      editId,
      item,
      title,
      image,
      handleOnChangeImage,
      onClicOfCloseBadge,
      handleAdd,
      handleEdit,
    } = this.props;
    console.log({ item });
    return (
      <CommonModal handleClose={() => handleClose()} open={openGalleryAddModal}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            title: title,
            image: image,
          }}
          onSubmit={() => {
            editId !== "" ? handleEdit(editId) : handleAdd();
          }}
          validationSchema={this.validateSchema}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box width={"95%"} height="100%" sx={{ postion: "relative" }}>
                <Box sx={{ postion: "relative" }}>
                  <Box
                    sx={{ postion: "relative", width: "95%", height: "289px" }}
                  >
                    {item.imgUrl === "" && image === "" ? (
                      <>
                        <Box sx={{ position: "relative" }}>
                          <input
                            name={"image"}
                            id="image"
                            accept="*"
                            type="file"
                            onChange={(e) => handleOnChangeImage(e)}
                            style={{
                              opacity: 0,
                              position: "relative",
                              width: "100%",
                              height: "289px",
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              zIndex: 1,
                            }}
                          />
                          <ErrorMessage name="image" />
                          <Box
                            sx={{
                              bgcolor: "#f0f0f0",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              padding: "32px 40px",
                              height: "100%",
                              width: "100%",
                              borderRadius: "4px 4px 0px 0px",
                            }}
                          >
                            <Box
                              sx={{
                                border: "2px dashed #A4A1A1",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                width: "100%",
                                flexDirection: "column",
                              }}
                            >
                              <Box>
                                <img
                                  src={galleryUploadIcon}
                                  style={{
                                    width: "64px",
                                    height: "64px",
                                    objectFit: "contain",
                                  }}
                                  alt="images"
                                />
                              </Box>
                              <Box>
                                <Typography
                                  component={"h5"}
                                  sx={{
                                    fontSize: {
                                      xs: "16px",
                                      md: "18px",
                                      lg: "20px",
                                    },
                                    color: "#272522",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  Upload gallery Image
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "10px",
                                      sm: "12px",
                                      md: "14px",
                                      lg: "16px",
                                    },
                                    color: "#A4A1A1",
                                    fontWeight: "500",
                                    textTransform: "lowercase",
                                  }}
                                >
                                  Supported files PNG, JPEG, SVG, wEBP
                                </Typography>{" "}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </>
                    ) : item.imgUrl && editId !== "" ? (
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <img
                        src={image}
                        alt={title}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    )}
                  </Box>

                  <Box
                    marginTop={3}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    gap={2}
                    flexWrap="wrap"
                  >
                    <Box width={"100px"} height="100%">
                      <>
                        {item?.imgUrl === "" && image === "" ? (
                          <>
                            <Box bgcolor={"#f0f0f0"} padding={"10px 9px"}>
                              <Box p={"9px 5px "}>
                                <Icon
                                  sx={{ color: "#A4A1A1", fontSize: "80px" }}
                                >
                                  +
                                </Icon>
                              </Box>
                            </Box>
                          </>
                        ) : item.imgUrl && editId !== "" ? (
                          <Badge
                            color="secondary"
                            badgeContent={
                              <CloseIcon
                                onClick={onClicOfCloseBadge}
                                sx={{
                                  bgcolor: "#272727",
                                  color: "#fff",
                                  borderRadius: "50%",
                                  fontSize: "1rem",
                                }}
                              />
                            }
                          >
                            <img
                              src={item.imgUrl && item.imgUrl}
                              alt="fesdga "
                              style={{
                                objectFit: "contain",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </Badge>
                        ) : (
                          <Badge
                            color="secondary"
                            badgeContent={
                              <CloseIcon
                                onClick={onClicOfCloseBadge}
                                sx={{
                                  bgcolor: "#272727",
                                  color: "#fff",
                                  borderRadius: "50%",
                                  fontSize: "1rem",
                                }}
                              />
                            }
                          >
                            <img
                              src={image}
                              alt=""
                              style={{
                                objectFit: "contain",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </Badge>
                        )}
                      </>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box width={"90%"}>
                <>
                  <Form>
                    <Inputs
                      name="title"
                      placeholder="enter title"
                      handleChange={(e) => onChange(e)}
                      value={title}
                      label={
                        item && editId !== ""
                          ? "Edit Gallery title"
                          : "Add Gallery Title"
                      }
                    />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        flexWrap: "wrap",
                        mt: 2,
                      }}
                    >
                      {item && editId !== "" ? (
                        <>
                          <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                            <ButtonModal
                              type="submit"
                              icon={<SaveIcon />}
                              bgColor="#E7A356"
                              color="#fff"
                              title="save"
                              // handleClick={() => handleEdit(editId)}
                            />
                          </Box>
                          <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                            <ButtonModal
                              icon={<DeleteIcon />}
                              bgColor="#272522"
                              color="#fff"
                              title="delete"
                              handleClick={() => handleClose()}
                            />
                          </Box>
                        </>
                      ) : (
                        <ButtonModal
                          type="submit"
                          icon={<SaveIcon />}
                          bgColor="#E7A356"
                          color="#fff"
                          title="Add New Image"
                          // handleClick={() => handleAdd()}
                        />
                      )}
                    </Box>
                  </Form>
                </>
              </Box>
            </Grid>
          </Grid>
        </Formik>
      </CommonModal>
    );
  }
}
