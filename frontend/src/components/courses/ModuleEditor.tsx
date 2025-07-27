import styled from "styled-components";
import { useState } from "react";
import { Button, Input } from "@/components/ui/FormElements";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaGripVertical, FaTrash, FaPlus } from "react-icons/fa";

const ModuleContainer = styled.div`
  margin-bottom: 2rem;
`;

const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md}
    ${({ theme }) => theme.borderRadius.md} 0 0;
`;

const ModuleTitle = styled.h3`
  flex: 1;
  margin: 0;
`;

const LessonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md}
    ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

const LessonItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const DragHandle = styled.div`
  margin-right: 1rem;
  cursor: grab;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const LessonContent = styled.div`
  flex: 1;
`;

const LessonTitle = styled.div`
  font-weight: 500;
`;

const LessonType = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

type Module = {
  id: string;
  title: string;
  lessons: {
    id: string;
    title: string;
    type: string;
  }[];
};

type ModuleEditorProps = {
  modules: Module[];
  onModulesChange: (modules: Module[]) => void;
};

const ModuleEditor = ({ modules, onModulesChange }: ModuleEditorProps) => {
  const [newLesson, setNewLesson] = useState<{ [key: string]: string }>({});

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const sourceModuleIndex = parseInt(result.source.droppableId);
    const destModuleIndex = parseInt(result.destination.droppableId);

    if (sourceModuleIndex === destModuleIndex) {
      // Reorder within same module
      const newModules = [...modules];
      const [movedLesson] = newModules[sourceModuleIndex].lessons.splice(
        result.source.index,
        1
      );
      newModules[destModuleIndex].lessons.splice(
        result.destination.index,
        0,
        movedLesson
      );
      onModulesChange(newModules);
    } else {
      // Move to different module
      const newModules = [...modules];
      const [movedLesson] = newModules[sourceModuleIndex].lessons.splice(
        result.source.index,
        1
      );
      newModules[destModuleIndex].lessons.splice(
        result.destination.index,
        0,
        movedLesson
      );
      onModulesChange(newModules);
    }
  };

  const handleAddLesson = (moduleId: string) => {
    if (!newLesson[moduleId]?.trim()) return;

    const newModules = modules.map((module) => {
      if (module.id === moduleId) {
        return {
          ...module,
          lessons: [
            ...module.lessons,
            {
              id: `lesson-${Date.now()}`,
              title: newLesson[moduleId],
              type: "text",
            },
          ],
        };
      }
      return module;
    });

    onModulesChange(newModules);
    setNewLesson((prev) => ({ ...prev, [moduleId]: "" }));
  };

  const handleDeleteLesson = (moduleId: string, lessonId: string) => {
    const newModules = modules.map((module) => {
      if (module.id === moduleId) {
        return {
          ...module,
          lessons: module.lessons.filter((lesson) => lesson.id !== lessonId),
        };
      }
      return module;
    });

    onModulesChange(newModules);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {modules.map((module, moduleIndex) => (
        <ModuleContainer key={module.id}>
          <ModuleHeader>
            <ModuleTitle>{module.title}</ModuleTitle>
            <Button size="sm" variant="danger">
              Delete Module
            </Button>
          </ModuleHeader>

          <Droppable droppableId={moduleIndex.toString()}>
            {(provided) => (
              <LessonList ref={provided.innerRef} {...provided.droppableProps}>
                {module.lessons.map((lesson, lessonIndex) => (
                  <Draggable
                    key={lesson.id}
                    draggableId={lesson.id}
                    index={lessonIndex}
                  >
                    {(provided) => (
                      <LessonItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <DragHandle {...provided.dragHandleProps}>
                          <FaGripVertical />
                        </DragHandle>
                        <LessonContent>
                          <LessonTitle>{lesson.title}</LessonTitle>
                          <LessonType>{lesson.type}</LessonType>
                        </LessonContent>
                        <Actions>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() =>
                              handleDeleteLesson(module.id, lesson.id)
                            }
                          >
                            <FaTrash />
                          </Button>
                        </Actions>
                      </LessonItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}

                <LessonItem style={{ borderTop: "1px dashed #ddd" }}>
                  <Input
                    placeholder="New lesson title"
                    value={newLesson[module.id] || ""}
                    onChange={(e) =>
                      setNewLesson((prev) => ({
                        ...prev,
                        [module.id]: e.target.value,
                      }))
                    }
                    style={{ flex: 1, marginRight: "1rem" }}
                  />
                  <Button
                    size="sm"
                    onClick={() => handleAddLesson(module.id)}
                    disabled={!newLesson[module.id]?.trim()}
                  >
                    <FaPlus /> Add Lesson
                  </Button>
                </LessonItem>
              </LessonList>
            )}
          </Droppable>
        </ModuleContainer>
      ))}

      <Button
        variant="outline"
        onClick={() => {
          onModulesChange([
            ...modules,
            {
              id: `module-${Date.now()}`,
              title: `Module ${modules.length + 1}`,
              lessons: [],
            },
          ]);
        }}
      >
        + Add New Module
      </Button>
    </DragDropContext>
  );
};

export default ModuleEditor;
