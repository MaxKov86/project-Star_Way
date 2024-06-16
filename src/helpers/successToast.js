import toast from "react-hot-toast";

export default function successToaster(theme, toastId, message = null) {
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

    toast.success(message ?? 'Success!', {
        style: {
            color,
            backgroundColor,
        }
    });
}