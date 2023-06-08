import { toast } from "react-toastify"

export function toastError(message: string) {
  toast(message, {
    type: "error",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    draggable: false,
    style: { fontFamily: "Montserrat", color: "black" },
  })
}

export function toastSuccess(message: string) {
  toast(message, {
    type: "success",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    draggable: false,
    style: { fontFamily: "Montserrat", color: "black" },
  })
}
