import React, { Component } from "react";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import ClassIcon from '@mui/icons-material/Class';
import DeleteIcon from "@mui/icons-material/Delete";
import { withStyles } from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';

import blogpic from '../../assets/images/Blogimages/blogimg-1.png';
import {BlogStyles} from './OurBlog.Style';

interface blogP{
    classes: any;
    open: boolean;
    close: ()=>void
}
class BlogEditModal extends Component<blogP> {

  render() {
    const {open, close, classes} = this.props;
    return (
      <>
        <Modal
          open={open}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {md:600, sm:'90%', xs:'80%', lg:800},
            bgcolor: 'background.paper',
            borderRadius:'5px',
            boxShadow: 24,
            p: 4,
          }}>
            <Box className={classes.modalClose}
              onClick={close}
            >
              <CloseIcon sx={{color:'#fff', fontSize:'30px'}} />
            </Box>
            <Grid container columnSpacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img src={blogpic} width="100%" alt="blog img" />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                        <Typography className={classes.editFeilds}>
                            Blog Title
                        </Typography>
                        <TextField placeholder="blog name" 
                            fullWidth
                            sx={{mb:2}}
                        />
                        <Typography className={classes.editFeilds}>
                            Description
                        </Typography>
                        <TextField maxRows={5} placeholder="Long description type here"
                            fullWidth multiline
                        />
                    </Box>
                    
                    <Box className={classes.modalBtnBox}>
                        <Button startIcon={<ClassIcon />}
                          className={classes.saveBtn}
                          onClick={close}
                        >
                          Save
                        </Button>
                        <Button startIcon={<DeleteIcon />}
                          className={classes.delBtn}
                          onClick={close}
                        >
                          Delete
                        </Button>
                    </Box>
                </Grid>
            </Grid>
          </Box>
        </Modal>
      </>
    );
  }
}

export default withStyles(BlogStyles)(BlogEditModal);
