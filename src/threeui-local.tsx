// Local integration adapter: the registry bundle provides DotMatrixBackground,
// not the package-wide collection dispatcher. The registered source stays untouched.
import { DotMatrixBackground, type DotMatrixBackgroundProps } from './shaders/dot-matrix/DotMatrixBackground';
export type StructureFlowCollectionProps = DotMatrixBackgroundProps & { variant: 'dot-matrix' };
export function StructureFlowCollection({ variant, ...props }: StructureFlowCollectionProps) {
  if (variant !== 'dot-matrix') throw new Error('Only the registered dot-matrix variant is installed.');
  return <DotMatrixBackground {...props} />;
}
