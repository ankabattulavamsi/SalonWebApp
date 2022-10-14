import React, { Component } from "react";
import { Badge, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CommonModal from "../common/CommonModal/CommonModal";
import { Form, Formik } from "formik";
import ButtonModal from "../common/ButtonModal/ButtonModal";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { gallaryData } from "../../utils/data/GalleryOwner/Gallery";
import { Inputs } from "../common";

interface GalleryAddModalProps {
  openGalleryAddModal: boolean;
  handleClose: (type?: string) => void;
}
interface GalleryAddModalState {}
export default class GalleryAddModal extends Component<
  GalleryAddModalProps,
  GalleryAddModalState
> {
  render() {
    return (
      <CommonModal
        handleClose={() => this.props.handleClose()}
        open={this.props.openGalleryAddModal}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box width={"95%"} height="100%">
              <Box>
                <Box sx={{ postion: "relative" }}>
                  <img
                    src={gallaryData[2].imgUrl}
                    alt=""
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>

                <Box
                  marginTop={3}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  gap={2}
                  flexWrap="wrap"
                >
                  <Box width={"100px"} height="100%">
                    <Badge
                      color="secondary"
                      badgeContent={
                        <CloseIcon
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
                        src={gallaryData[2].imgUrl}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Badge>
                  </Box>

                  <Box width={"100px"} height="100%">
                    <Badge
                      color="secondary"
                      badgeContent={
                        <CloseIcon
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
                        src={gallaryData[2].imgUrl}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Badge>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={"90%"}>
              <Formik initialValues={{}} onSubmit={() => {}}>
                <Form>
                  <Inputs
                    name="title"
                    placeholder="enter title"
                    label="Add Gallery Title"
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
                    <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                      <ButtonModal
                        icon={<SaveIcon />}
                        bgColor="#E7A356"
                        color="#fff"
                        title="save"
                      />
                    </Box>
                    <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                      <ButtonModal
                        icon={<DeleteIcon />}
                        bgColor="#272522"
                        color="#fff"
                        title="delete"
                      />
                    </Box>
                  </Box>
                </Form>
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </CommonModal>
    );
  }
}
