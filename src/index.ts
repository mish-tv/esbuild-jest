import { Config } from "@jest/types";
import { SyncTransformer, TransformedSource, TransformOptions } from "@jest/transform";
import { Loader, transformSync } from "esbuild";

const loaders = new Set(["js", "jsx", "ts", "tsx", "css", "json", "text", "base64", "file", "dataurl", "binary", "default"]);
const isLoader = (loader: string): loader is Loader => loaders.has(loader);

type OptionType = Record<string, never>;

const transformer: SyncTransformer<OptionType> = {
  canInstrument: true,
  process: (sourceText: string, sourcePath: Config.Path, _: TransformOptions<OptionType>): TransformedSource => {
    const loader = sourcePath.split(".").pop() ?? "text";
    if (!isLoader(loader)) throw new Error(`could not guess the loader from the extension. ${sourcePath}`);

    const { code, map } = transformSync(sourceText, {
      loader,
      sourcefile: sourcePath,
      format: "cjs",
      sourcemap: true,
    });

    return { code, map };
  },
};

export default transformer;
