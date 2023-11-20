"use client";
import React, { useState, useEffect } from "react";
import { getComment } from "@/apis";
import { formatUnixTime } from "@/utils/functions";

interface CommentProps {
  id: number;
  isParent: boolean;
}

interface CommentData {
  by: string;
  time: number;
  text: string;
  kids?: number[];
}

const Comment: React.FC<CommentProps> = ({ id, isParent }) => {
  const [comment, setComment] = useState<CommentData | null>(null);

  useEffect(() => {
    const fetchComment = async () => {
      const response = await getComment(id);
      setComment(response);
    };

    fetchComment();
  }, [id]);

  if (!comment) {
    return null;
  }

  return (
    <div>
      <article
        className={`border-zinc-800 flex flex-col ${
          isParent || "pl-6 lg:pl-8 border-l"
        }`}
      >
        <p className="text-zinc-500 text-sm mb-1 mt-4">
          {formatUnixTime(comment.time)}
        </p>

        <span
          className="inline-block [&>pre]:whitespace-pre-wrap break-words [&>p]:mt-4"
          dangerouslySetInnerHTML={{ __html: comment.text }}
        />

        <p className="text-sm text-zinc-600 mt-1 mb-4">
          by <b className="text-zinc-500">{comment.by}</b>
        </p>

        {comment.kids?.map((childId) => (
          <Comment key={childId} id={childId} isParent={false} />
        ))}
      </article>
    </div>
  );
};

export default Comment;
