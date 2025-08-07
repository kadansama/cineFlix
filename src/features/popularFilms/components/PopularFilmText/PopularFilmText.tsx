import { Typography } from "@mui/material";
import type { ReactElement } from "react";

type BlockType = "label" | "title" | "rating" | "overview" | "genres";

type PopularFilmTextBlockProps = {
  type: BlockType;
  content: string;
  className?: string;
};

const blockStyles: Record<BlockType, { variant: "h1" | "h2" | "h5" | "h3" | "h6" | "body1" | "body2", sx?: object }> = {
  label:   { variant: "h5", sx: { fontWeight: 500, marginBottom: 1, borderLeft: "4px solid var(--red)", paddingLeft: "10px"} },
  title:   { variant: "h2", sx: { fontWeight: "bold", marginBottom: 2}},
  rating:  { variant: "h5", sx: {marginBottom: 1 } },
  overview:{ variant: "h6", sx: {marginBottom: 2} },
  genres:  { variant: "h5"},
};

export const PopularFilmTextBlock = ({ type, content, className }: PopularFilmTextBlockProps): ReactElement => {
  const { variant, sx } = blockStyles[type];

  return (
    <Typography variant={variant} sx={sx} className={className || ""}>
      {content}
    </Typography>
  );
};
