import React, { useState } from "react";
import {
    Box, Button, TextField, Typography, Checkbox, FormControlLabel
} from "@material-ui/core";
import { FileUploaderService } from "../services/FileUploaderService";

export const FileUploaderResponse = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [useNoBuild, setUseNoBuild] = useState(true);

    const handleFileSelection = (event) => {
        console.log("file selected : " + event.target.files[0].name)
        setSelectedFile(event.target.files[0])
    }

    const handleDataFetch = () => {
        const data = FileUploaderService.fetchData()
        console.log(data);
    }

    const handleFileUploading = () => {
        if (!selectedFile) {
            console.log("select a file before uploading");
            alert("select a file before uploading")
        } else {
            console.log("uploading file : " + selectedFile.name);

            const formData = new FormData();

            formData.append(
                "myFile",
                selectedFile,
                selectedFile.name
            );

            // axios.post("api/uploadfile", formData);
            FileUploaderService.uploadFile(formData)
                .catch(e => {
                    alert(e.message)
                })

        }
    }

    return (
        <div>
            <div>
                <Typography style={{ marginLeft: 180, marginTop: "15%", fontSize: 40 }} align={"left"}> <b>India's Credit</b> </Typography>
                <Typography style={{  marginLeft: 180, fontSize: 40 }} align={"left"}> <b>Revolution is here.</b> </Typography>
                <Typography style={{ marginLeft: 180, fontSize: 40 }} align={"left"}> <b>Pay 1/3rd. Anywhere</b> </Typography>
            </div>

            <TextField
                style={{marginLeft: 180, marginTop: "5%", padding: 2}}
                id="outlined-basic" variant="outlined" placeholder={"Enter Phone Number"} size="small" type="number"
                InputProps={{ endAdornment: <><Button style={{padding: 4}} size="small" color={"primary"} variant="contained"> Apply Now </Button></> }}
            />

            <Box>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={useNoBuild}
                            onChange={({ }, checked) => setUseNoBuild(checked)}
                            name="use-no-build"
                            color="green"
                        />
                    }
                    style={{ marginBottom: 100, marginLeft: 140 }}
                    label="By submitting this information, you agree to be contacted by
                Uni Cards over Call, SMS, Email or WhatsApp to guide you 
                through your application."
                />
            </Box>

        </div>
    );
}
