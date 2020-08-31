import { Diagnostic } from "./types";
import { Dependency } from "../deps";
import { Registry } from "../registries";

export class NoMalicious extends Diagnostic {
  constructor(registry: Registry, dep: Dependency) {
    super("no-malicious", registry, dep);
  }
  render(): string {
    throw new Error("Method not implemented.");
  }
}
