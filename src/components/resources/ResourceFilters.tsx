"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ResourceFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateFilter(
    key: string,
    value: string
  ) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(
      `/resources?${params.toString()}`
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

      {/* Scheme */}
      <select
        className="border rounded-lg p-2 w-full bg-background"
        onChange={(e) =>
          updateFilter("scheme", e.target.value)
        }
      >
        <option value="">Scheme</option>
        <option value="2021">2021 Scheme</option>
        <option value="2022">2022 Scheme</option>
      </select>

      {/* Branch */}
      <Select
        onValueChange={(value) =>
          updateFilter("branch", value)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Branch" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="CSE">CSE</SelectItem>
          <SelectItem value="ISE">ISE</SelectItem>
          <SelectItem value="AIML">AIML</SelectItem>
          <SelectItem value="ECE">ECE</SelectItem>
          <SelectItem value="EEE">EEE</SelectItem>
          <SelectItem value="MECH">MECH</SelectItem>
        </SelectContent>
      </Select>

      {/* Semester */}
      <Select
        onValueChange={(value) =>
          updateFilter("semester", value)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Semester" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="1">Semester 1</SelectItem>
          <SelectItem value="2">Semester 2</SelectItem>
          <SelectItem value="3">Semester 3</SelectItem>
          <SelectItem value="4">Semester 4</SelectItem>
          <SelectItem value="5">Semester 5</SelectItem>
          <SelectItem value="6">Semester 6</SelectItem>
          <SelectItem value="7">Semester 7</SelectItem>
          <SelectItem value="8">Semester 8</SelectItem>
        </SelectContent>
      </Select>

      {/* Subject */}
      <Select
        onValueChange={(value) =>
          updateFilter("subject", value)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Subject" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Full Stack Development">
            Full Stack Development
          </SelectItem>

          <SelectItem value="Data Structures">
            Data Structures
          </SelectItem>

          <SelectItem value="DBMS">
            DBMS
          </SelectItem>

          <SelectItem value="Operating Systems">
            Operating Systems
          </SelectItem>

          <SelectItem value="Computer Networks">
            Computer Networks
          </SelectItem>

          <SelectItem value="Machine Learning">
            Machine Learning
          </SelectItem>
        </SelectContent>
      </Select>

    </div>
  );
}