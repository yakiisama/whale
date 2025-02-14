export interface WhaleParams {
    name: string;
    logo: string;
    desc?: string;
    dom?: HTMLElement;
    appear?: 'drawer' | 'modal' | (() => void);
    title?: string;
}

export type ConfigMap = Map<string, WhaleParams>;

export interface TWindow extends Window {
    config?: ConfigMap
} 