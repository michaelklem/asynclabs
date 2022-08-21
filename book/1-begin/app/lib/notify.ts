import { openSnackbarExternal } from '../components/common/Notifier';

export function notifyError( obj ) {
   openSnackbarExternal({ message: obj.message || obj.toString(), severity: "error" });
};  


export function notify( obj ) {
   openSnackbarExternal({ message: obj.message || obj.toString(), severity: "success" });
};