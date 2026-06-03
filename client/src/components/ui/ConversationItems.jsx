import React from "react";

const ConversationItems = ({ profileData, myId }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="w-10 h-10 border border-slate-100 bg-slate-400 rounded-full flex items-center justify-center">
        E
      </div>
      <div>
        <h2 className="text-base font-semibold">
          {profileData.creator._id == myId
            ? profileData.participent.fullName
            : profileData.creator.fullName}
        </h2>
        <p className="text-sm text-slate-300">
          {profileData.lastMessage || ""}
        </p>
      </div>
    </div>
  );
};

export default ConversationItems;
