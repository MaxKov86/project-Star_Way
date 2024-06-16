import toast from "react-hot-toast";

export default function errorToaster(theme, toastId, message = null) {
    toast.remove(toastId);

    let color;
    let backgroundColor;
    switch (theme) {
        case 'dark':
            color = "#161616";
            backgroundColor = "#F6F6F7"
            break;
        default:
            color = "#F6F6F7";
            backgroundColor = "#161616";
            break;

    }
    toast.error(message ?? 'Please, wait!', {
        style: {
            color,
            backgroundColor,
        }
    });
    return toastId;
}