import { style } from "@vanilla-extract/css";

export const className = style({
  display: "flex",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.5)",
  alignItems: "center",
  justifyContent: "center",
});
