import { useState } from "react";
import { Form, Input, Button, Select } from "@/components/ui/FormElements";

type CourseFormProps = {
  onSubmit: (data: any) => void;
  initialData: any | null;
};

const CourseForm = ({ onSubmit, initialData }: CourseFormProps) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      description: "",
      category: "",
      level: "beginner",
      price: 0,
      status: "draft",
    }
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onSubmit(formData);
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Course Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <Input
        label="Description"
        as="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        required
      />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <div>
          <label>Category</label>
          <Input
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Level</label>
          <Select name="level" value={formData.level} onChange={handleChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Select>
        </div>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <div>
          <label>Price ($)</label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label>Status</label>
          <Select name="status" value={formData.status} onChange={handleChange}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </Select>
        </div>
      </div>

      <Button type="submit" disabled={loading}>
        {loading
          ? "Saving..."
          : initialData
          ? "Update Course"
          : "Create Course"}
      </Button>
    </Form>
  );
};

export default CourseForm;
