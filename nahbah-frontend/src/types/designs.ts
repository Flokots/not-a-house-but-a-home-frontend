export interface Design {
  id: number;
  title: string;
  material: {
    id: number;
    name: string;
  };
  description: string;
  design_file: string | null;
  preview_image: string | null;
  contributor: {
    id: number;
    name: string;
  } | null;
  submission_date: string;
  status: "pending" | "approved" | "rejected";
  rejection_reason: string | null;
}