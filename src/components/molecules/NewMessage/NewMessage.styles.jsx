import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Box from "@material-ui/core/Box";

export const FlexBox = styled(Box)({
    display: "flex"
});

export const Textarea = styled(TextField)({
    flex: '1 1 auto'
});

export const SendButton = styled(IconButton)({
    alignSelf: "flex-end"
});