import fs from "fs";
import path from "path";

export async function getRegistryComponentSource(name: string) {
  // Handle component-variant naming convention
  // e.g., "button-demo" -> "registry/button/demo.tsx"
  // e.g., "alert-dialog-demo" -> "registry/alert-dialog/demo.tsx"
  // e.g., "data-grid-cell-border" -> "registry/data-grid/cell-border.tsx"
  
  const parts = name.split("-");
  const registryPath = path.join(process.cwd(), "registry");
  
  // Try progressively longer component names until we find a matching directory
  for (let i = 1; i <= parts.length; i++) {
    const component = parts.slice(0, i).join("-");
    const variant = parts.slice(i).join("-");
    
    if (!component || !variant) continue;
    
    const componentDir = path.join(registryPath, component);
    const filePath = path.join(componentDir, `${variant}.tsx`);
    
    try {
      // Check if the component directory exists and the file exists
      if (fs.existsSync(componentDir) && fs.statSync(componentDir).isDirectory() && fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, "utf8");
      }
    } catch (error) {
      // Continue to next iteration
      continue;
    }
  }
  
  return null;
}

