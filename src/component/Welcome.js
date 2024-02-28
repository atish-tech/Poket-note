import welcomeBaner from "../assect/welcome.png";
import LockIcon from '@mui/icons-material/Lock';

export const Welcome = () => {
  return (
    <div className="flex flex-col justify-between h-full  py-5">
      <div>{/* <p>.</p> */}</div>
      <div className="flex flex-col items-center justify-center">
        <img src={welcomeBaner} />
        <p className="font-bold text-[50px]">Pocket Notes</p>
        <p className="text-[#292929] font-medium text-[22px] w-[60%]">
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div>
        <div className="text-[#292929] flex items-center justify-center">
          <LockIcon />
          <span className="font-medium">end-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};
