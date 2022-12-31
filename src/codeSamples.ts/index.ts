import type { Sample } from "../components/CodeSample";

export const sample_1: Sample = {
  language: "elixir",
  code: `
    defmodule Hello do
        def say_hi(name) do
            IO.puts "Hello, #{name}!"
        end
    end
    `,
};
