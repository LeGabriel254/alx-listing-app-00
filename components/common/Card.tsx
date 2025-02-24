import React from "react";
import { Card as ShadCard, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, className }) => {
  return (
    <ShadCard className={cn("rounded-xl shadow-md overflow-hidden", className)}>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </ShadCard>
  );
};

export default Card;
